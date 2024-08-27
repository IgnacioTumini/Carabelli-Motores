import React from "react";

const Maps: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18612.026094292665!2d-59.451009958173785!3d-34.44776967336031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb8ce91aa8986f%3A0xf55f7ca750d21c3f!2sCarabelli%20Motores%20S.A.!5e0!3m2!1ses!2sar!4v1724265472715!5m2!1ses!2sar"
      width="450"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Maps;
