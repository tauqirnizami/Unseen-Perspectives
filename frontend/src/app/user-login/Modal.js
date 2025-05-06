import React from 'react';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        width: '80%',
        maxWidth: '750px',
        maxHeight: '80%',
        overflowY: 'auto',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        marginTop: '100px',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '26px',
          marginBottom: '20px',
          fontWeight: '600',
        }}>
          Terms and Conditions
        </h2>

        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          Welcome to <b>Unseen Perspectives</b>. These Terms and Conditions ("Terms") govern your access to and use of the services provided by Unseen Perspectives, including the website and any related services.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>1. Acceptance of Terms</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          By accessing and using the services provided by <b>Unseen Perspectives</b>, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our services.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>2. Use of Service</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          Unseen Perspectives provides a platform for blind individuals to showcase their skills and connect with employers. You agree to use our platform responsibly and not for any unlawful purposes.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>3. Privacy and Data Protection</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          We value your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and protect your data.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>4. Limitation of Liability</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          <b>Unseen Perspectives</b> is not responsible for any damages, losses, or expenses arising from the use of our platform. 
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>5. Modifications to Terms</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          <b>Unseen Perspectives</b> reserves the right to update or modify these Terms at any time. You will be notified of any changes, and your continued use of the platform constitutes your acceptance of the updated Terms.
        </p>

        <button
          onClick={onClose}
          style={{
            backgroundColor: '#007bff', // A professional and sleek blue
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '50px', // Rounded button for a sleek look
            transition: 'all 0.3s ease',
            marginTop: '30px',
            display: 'block',
            width: '100%',
            fontWeight: '600',
            textAlign: 'center',
            boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.2)',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'} // Darker blue on hover
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'} // Original blue on leave
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
