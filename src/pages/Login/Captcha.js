import ReCaptchaV2 from "react-google-recaptcha";

const Captcha = ({ verifyCallback }) => {
  const handleToken = (token) => {
    verifyCallback(token);
  };

  const handleExpire = () => {
    verifyCallback(null);
  };

  return (
    <div>
      <ReCaptchaV2
        className='g-recaptcha'
        sitekey='6LcSRMAaAAAAADGQM8Yv10J1KV_cYiFzu1F00tzC'
        onChange={handleToken}
        onExpired={handleExpire}
      />
    </div>
  );
};

export default Captcha;
