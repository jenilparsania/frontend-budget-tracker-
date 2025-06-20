import { useEffect, useState } from "react";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const Dashboard = () => {
    
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchTransactions = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const token = localStorage.getItem('token');
                
                if (!token) {
                    setError('No authentication token found. Please sign in again.');
                    setLoading(false);
                    return;
                }

                const response = await axios.get(`${API_BASE_URL}/transactions`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                setTransactions(response.data);
            } catch (err) {
                console.error('Error fetching transactions:', err);
                setError(err.response?.data?.message || 'Failed to fetch transactions. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    },[]);
    
    if (loading) {
        return (
            <div className="container mt-4">
                <h2>Welcome to Your Budget Dashboard</h2>
                <div className="text-center">
                    <p>Loading your transactions...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <h2>Welcome to Your Budget Dashboard</h2>
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }
    
    return(
        <div className="container mt-4">
            <h2>Welcome to Your Budget Dashboard</h2>
            
            {transactions.length === 0 ? (
                <p>No transactions found. Start by adding your first transaction!</p>
            ) : (
                <div>
                    <h3>Your Transactions</h3>
                    <ul className="list-group">
                        {transactions.map((transaction, index) => (
                            <li key={transaction._id || index} className="list-group-item">
                                {transaction.description} - ${transaction.amount}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dashboard;