import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      date: '2024-01-15',
      amount: 50.00,
      description: 'Grocery shopping',
      location: 'Walmart',
      type: 'Debit',
      category: 'Shopping',
    },
    {
      id: '2',
      date: '2024-01-14',
      amount: 25.00,
      description: 'Gas station',
      location: 'Shell',
      type: 'Debit',
      category: 'Travel',
    },
    {
      id: '3',
      date: '2024-01-13',
      amount: 100.00,
      description: 'Salary deposit',
      location: 'Bank',
      type: 'Credit',
      category: 'Income',
    },
  ]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const getTransactionById = (id) => {
    return transactions.find(transaction => transaction.id === id);
  };

  const value = {
    transactions,
    addTransaction,
    getTransactionById,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}; 