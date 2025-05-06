import React from 'react';

const PrivacyModal = ({ show, onClose }) => {
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
          Privacy Policy
        </h2>

        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          Welcome to <b>Unseen Perspectives</b>! Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>1. Information Collection</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          We collect various types of information. This may include data such as your name, email address, phone number, and any other information you provide to us when you sign up or interact with our platform, inorder to assign you an id for login. 
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>3. Data Protection</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          Protecting your data is our priority. We employ various technical and organizational security measures to safeguard your personal information. All sensitive data is encrypted, and access to your data is limited to authorized personnel only.
          However, despite these precautions, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security. By using our services, you acknowledge and accept this inherent risk.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>4. Sharing Information</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          We do not sell or rent your personal information to third parties. However, we may share your data with trusted service providers who help us operate our platform, provide customer service, and perform analytics. These third parties are required to protect your information and are prohibited from using it for any other purpose.
          We may also disclose personal data if required by law or to protect the rights, property, or safety of <b>Unseen Perspectives</b>, our users, or others. This includes sharing information in response to legal processes, such as subpoenas or court orders.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>5. Cookies and Tracking Technologies</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          Unseen Perspectives uses cookies and similar tracking technologies to collect and store information about your usage of our platform. Cookies are small data files placed on your device to improve your user experience. They allow us to remember your preferences, analyze site traffic, and enhance site performance.
          You can control cookie settings through your browser, but disabling cookies may impact your ability to use certain features on our platform. 
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>6. Your Rights and Choices</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          If you believe that we have violated your privacy rights or have any concerns about how we handle your data, please contact us, and we will address your request in accordance with applicable laws.
        </p>

        <h3 style={{
          textAlign: 'center',
          color: '#5a5a5a',
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: '500',
        }}>7. Changes to Privacy Policy</h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '25px',
          textAlign: 'justify',
        }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
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

export default PrivacyModal;
