import TopBar from '@/app/components/TopBar';
import React from 'react';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      backgroundColor: '#faf9f6',
      padding: '20px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      maxWidth: '300px',
    },
    input: {
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#4caf50',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#45a049',
      },
    },
  };

function Profile() {


  return (
    <>
    <TopBar page={"Profile"} />

    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form}>
        <input type="email" placeholder="Email" required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>

    </>
  );
}

export default Profile;
