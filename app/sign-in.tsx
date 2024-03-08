import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import {
	LoginDataInterface,
	useSession,
} from '../src/contexts/auth/authContext';

const SignIn = () => {
	const { signIn } = useSession();

	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<LoginDataInterface>({
		defaultValues: {
			login: '',
			password: '',
		},
	});

	const loginScanner = useMutation({
		mutationFn: async (data: LoginDataInterface) => {
			const res = await fetch(
				`${process.env.EXPO_PUBLIC_API_URL}scanner/auth`,
				{
					method: 'POST',
					body: JSON.stringify({ login: data.login, password: data.password }),
					headers: {
						'Content-Type': 'application/json',
					},
					cache: 'no-cache',
				},
			);

			if (!res.ok) {
				const error = await res.json();
				throw new Error(error.message);
			}

			return await res.json();
		},
		onSuccess: (data) => {
			signIn({ login: data.login, eventId: data.event.id });
			router.replace('/');
		},
		onError: (error) => {
			setError('login', {
				type: 'manual',
				message: error.message,
			});
			setError('password', {
				type: 'manual',
				message: error.message,
			});
		},
	});

	const onSubmit = handleSubmit((data) => {
		const { login, password } = data;
		loginScanner.mutate({
			login,
			password,
		});
	});

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Login"
						onBlur={onBlur}
						onChangeText={onChange}
						className="border rounded-md p-3 py-2 w-[90%] my-2"
						value={value}
					/>
				)}
				name="login"
			/>
			{errors.login && <Text className="my-2">{errors.login.message}</Text>}

			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						secureTextEntry
						placeholder="**********"
						onBlur={onBlur}
						onChangeText={onChange}
						className="border rounded-md p-3 py-2 w-[90%] my-2"
						value={value}
					/>
				)}
				name="password"
			/>
			{errors.password && (
				<Text className="my-2">{errors.password.message}</Text>
			)}

			<Button onPress={onSubmit} label="Sign In" className="rounded-md my-2" />
		</View>
	);
};

export default SignIn;
