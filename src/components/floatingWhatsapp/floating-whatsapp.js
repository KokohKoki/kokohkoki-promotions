import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import kokohKokiLogo from '../../assets/images/LogoKokohKokiBulet.png';

export default function FloatingWA({ popup }) {
  const chat = "Hi there! 👋 \nI'm Ales, Do you need something ?";
  const [buttonStyle, setButtonStyle] = useState({
    width: '40px',
    height: '40px',
    bottom: '180px'
  });

  useEffect(() => {
    if (!popup) {
      setButtonStyle(prevStyle => ({
        ...prevStyle,
        bottom: '35px'
      }));
    } else {
      setButtonStyle(prevStyle => ({
        ...prevStyle,
        bottom: '270px'
      }));
    }
  }, [popup]);

  return (
    <FloatingWhatsApp
      allowEsc={true}
      allowClickAway={true}
      avatar={kokohKokiLogo}
      phoneNumber='+6281298772351'
      accountName='Kokoh Koki'
      statusMessage='Online'
      chatMessage={chat}
      notificationDelay={15}
      buttonStyle={buttonStyle}
    />
  );
}
