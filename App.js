import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Context Providers
import { AuthProvider } from './contexts/AuthContext';
import { TransactionProvider } from './contexts/TransactionContext';

// Screens
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#3498db',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: 'Expense Tracker' }}
            />
            <Stack.Screen
              name="TransactionDetail"
              component={TransactionDetailScreen}
              options={{ title: 'Transaction Details' }}
            />
            <Stack.Screen
              name="AddTransaction"
              component={AddTransactionScreen}
              options={{ title: 'Add Transaction' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TransactionProvider>
    </AuthProvider>
  );
}
