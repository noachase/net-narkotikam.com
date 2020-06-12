const appWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-template-areas:
    "h h"
    "n c";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
`;

const appWrapperContent = styled.div`
grid-area: c;
    background-color: rgba(0, 0, 0, .9);
    border: 1px black solid
`;