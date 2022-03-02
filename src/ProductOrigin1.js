import React from "react";
import styled from "styled-components";
export const ProductOrigin1 = ({}) => {
  return (
    <ProductOriginRoot>
      <Element7>
        <Header>
          <SunsetOrangeParagraph>
            Gratis pengirima untuk pembelanjaan diatas{"  "}Rp.750.00 atau lebih
          </SunsetOrangeParagraph>
          <WhiteFlexRow>
            <Text1>Home</Text1>
            <Element8>
              <Image1
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c208e6ef-4663-42a3-a0cb-d52d7d3e9c97.svg?alt=media&token=726d0120-709d-4d64-bbe7-ed3ead2abc75"
                }
              />
              <Text2>Products</Text2>
              <Element6
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/67cd66d2-7dd1-45b9-bfd8-e499ab483e33.svg?alt=media&token=8d23e38e-fa96-4ca5-b665-597dd7f6cb28"
                }
              />
            </Element8>
            <Element9>
              <Text3>Journal</Text3>
              <Element5
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c4228451-eb88-4297-9f1f-0459dca61e2c.svg?alt=media&token=b46d0612-3930-411d-9052-b39b3f4e213a"
                }
              />
            </Element9>
            <Element10>
              <Text4>Fishop-Go</Text4>
              <Text5>Customer Care</Text5>
              <Text6>About Us</Text6>
            </Element10>
            <Element3
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/4e0196b5-e530-4251-b0ac-600180fb6280.svg?alt=media&token=e7dc084a-67a1-4255-9369-2de34fbaac16"
              }
            />
            <Element1
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/3ab3dd18-83de-47ba-9833-5c9727eb7b36.svg?alt=media&token=d1a5a161-cca1-4df8-8280-7cc455d7414c"
              }
            />
            <Element2
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/a403ef42-0142-4384-a1ef-874ee665d3bb.svg?alt=media&token=0c6aa63b-d649-416d-abe4-10d8490f1cc5"
              }
            />
            <Element4
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/279921c8-f58c-4b0e-9ff4-3d16ce1f621d.svg?alt=media&token=2e9df99f-7cc8-42b4-9f6d-6debf6d4beb7"
              }
            />
          </WhiteFlexRow>
          <Untitled
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/32904e8d-e127-43a8-815b-3b01285c578a.png?alt=media&token=4ae36496-4022-4679-b8d3-05a35c03c0bb"
            }
          />
        </Header>
        <Text7>Our Product Come From.....</Text7>
      </Element7>
      <WorldMaps
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/543266ae-076d-4e4f-bfc7-3a49574bb05b.png?alt=media&token=97f0f52f-9b3b-4821-ac04-129ced5668d6"
        }
      />
      <Footer>
        <WildBlueYonderFlexRow>
          <FlexRow>
            <Text8 marginLeft={"15px"}>Quick links</Text8>
            <Text9>FAQ</Text9>
            <Text10 alignSelf={"flex-end"}>Business inquiries</Text10>
            <Text10 alignSelf={"stretch"}>Terms of service</Text10>
            <Text10 alignSelf={"stretch"}>Refund & Policy</Text10>
          </FlexRow>
          <FlexRow1>
            <Text8 marginLeft={"39px"}>Powered by</Text8>
            <Text14 marginBottom={"8px"}>PT. Ruangan Pendingi Indonesia</Text14>
            <Text8 marginLeft={"39px"}>Supplied by</Text8>
            <Text14 marginBottom={"0px"}>PT. Ruangan Pendingi Indonesia</Text14>
          </FlexRow1>
          <FlexRow2>
            <Text17>Newsletter</Text17>
            <SilverRectangle />
          </FlexRow2>
        </WildBlueYonderFlexRow>
        <Paragraph>copyright reserved ©2021. Fishop Indonesia</Paragraph>
      </Footer>
    </ProductOriginRoot>
  );
};
const Text8 = styled.div`
  color: #2e57a5;
  text-align: center;
  width: 159px;
  height: 30px;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
  margin-bottom: 23px;
  margin-left: ${(props) => props.marginLeft};
`;
const Text10 = styled.div`
  color: #345fb2;
  text-align: center;
  width: 189px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  align-self: ${(props) => props.alignSelf};
`;
const Text14 = styled.div`
  color: #345fb2;
  text-align: center;
  width: 363px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  align-self: stretch;
  margin-bottom: ${(props) => props.marginBottom};
`;
const ProductOriginRoot = styled.div`
  background-color: #ffffff;
  height: 1890px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  min-width: 1920px;
`;
const Element7 = styled.div`
  height: 47px;
  margin-bottom: 66px;
  width: 1920px;
  position: relative;
`;
const Header = styled.div`
  width: 1920px;
  height: 175px;
  position: absolute;
  top: -230px;
`;
const SunsetOrangeParagraph = styled.div`
  color: #fffbfb;
  display: flex;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
  background-color: #fa6060;
  width: 1920px;
  height: 28px;
  position: absolute;
  top: 8px;
  flex-direction: row;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  white-space: pre-wrap;
`;
const WhiteFlexRow = styled.div`
  background-color: rgba(255, 254, 249, 0.5);
  width: 1720px;
  position: absolute;
  top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 30px;
  align-items: flex-start;
`;
const Text1 = styled.div`
  color: #345fb2;
  width: 98px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  margin-top: 6px;
  margin-right: 2px;
`;
const Element8 = styled.div`
  align-self: stretch;
  width: 155px;
  margin-right: 12px;
  height: 40px;
  position: relative;
`;
const Image1 = styled.img`
  width: 150px;
  height: 40px;
  position: absolute;
`;
const Text2 = styled.div`
  color: #345fb2;
  width: 141px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 5px;
  left: 14px;
`;
const Element6 = styled.img`
  width: 8.23px;
  height: 23.64px;
  position: absolute;
  top: 17px;
  left: 119px;
`;
const Element9 = styled.div`
  width: 126px;
  height: 19px;
  margin-top: 6px;
  margin-right: 25px;
  position: relative;
`;
const Text3 = styled.div`
  color: #345fb2;
  width: 126px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
`;
const Element5 = styled.img`
  width: 8.23px;
  height: 23.64px;
  position: absolute;
  top: 10.23px;
  left: 90px;
`;
const Element10 = styled.div`
  align-self: stretch;
  width: 479px;
  margin-right: 242px;
  height: 40px;
  position: relative;
`;
const Text4 = styled.div`
  color: #345fb2;
  width: 155px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 6px;
  left: 132px;
`;
const Text5 = styled.div`
  color: #345fb2;
  width: 202px;
  height: 25px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 5px;
  left: 277px;
`;
const Text6 = styled.div`
  color: #345fb2;
  width: 156px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 6px;
`;
const Element3 = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 2px;
  margin-right: 26px;
`;
const Element1 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 3px;
  margin-right: 24px;
`;
const Element2 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 3px;
  margin-right: 21px;
`;
const Element4 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 3px;
`;
const Untitled = styled.img`
  width: 240px;
  height: 175px;
  position: absolute;
  left: 87px;
`;
const Text7 = styled.div`
  color: #345fb2;
  width: 600px;
  font-size: 40px;
  font-family: Roboto;
  font-weight: 700;
  position: absolute;
  left: 758px;
`;
const WorldMaps = styled.img`
  width: 1920px;
  height: 1240px;
  margin-bottom: 65px;
`;
const Footer = styled.div`
  width: 1924px;
  height: 250px;
  position: relative;
`;
const WildBlueYonderFlexRow = styled.div`
  background-color: rgba(163, 185, 228, 0.47);
  width: 1726px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 97px;
  padding-right: 97px;
  padding-top: 28px;
  padding-bottom: 37px;
`;
const FlexRow = styled.div`
  width: 198px;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Text9 = styled.div`
  color: #345fb2;
  text-align: center;
  width: 55px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  margin-left: 15px;
`;
const FlexRow1 = styled.div`
  margin-right: 153px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
`;
const Text17 = styled.div`
  color: #2e57a5;
  text-align: center;
  width: 159px;
  height: 30px;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
`;
const SilverRectangle = styled.div`
  background-color: #c4c4c4;
  width: 507px;
  height: 68px;
`;
const Paragraph = styled.div`
  color: #345fb2;
  text-align: center;
  width: 454px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 217px;
  left: 1470px;
`;
