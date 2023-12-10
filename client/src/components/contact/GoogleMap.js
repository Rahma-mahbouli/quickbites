import styled from 'styled-components';

const StyledGoogleMap = styled.iframe.attrs(props => ({
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217954.2534022472!2d10.841517499999998!3d35.766510999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134f2c2e4d11e6cd%3A0x2329e2d6379b822f!2sMonastir%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1631157444126!5m2!1sen!2sus",
  loading: "lazy"
}))`
  height: 100vh;
  width: 100vw;
`;

export default function GoogleMap() {
  return (
    <StyledGoogleMap />
  );
}
