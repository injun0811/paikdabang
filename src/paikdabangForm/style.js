import styled from "styled-components";

export const ContentItemContainer = styled.div`
    width: 1400px;
    margin: 40px auto;
    display: flex;

    .rightSide .mainImg {
        width: 555px;
        height: 650px;
        background-color: yellow;
    }

    .leftSide {
        width: 40%;
        padding: 30px;

        h2 {
            font-size: 40px;
            padding-bottom: 20px;
        }

        h3 {
            border-top: 2px solid #000;
            font-size: 30px;
            padding-top: 20px;
        }

        h4 {
            font-size: 25px;
            padding-top: 375px;
        }

        p {
            font-size: 25px;
            padding-bottom: 10px;
            border-bottom: 2px solid gray;
        }
    
        .infoTable {
            display: flex;

            .infoR {
                width: 50%;
            
                ul li {
                    padding: 5px;
                    border-right: 2px dotted #000;
                    margin: 10px;
                    font-size: 20px;
                    padding-right: 40px;
                    text-align: left;
                }
            }

            .infoL {
                width: 50%;

                ul li {
                    padding: 5px;
                    margin: 10px;
                    font-size: 20px;
                    padding-right: 20px;
                    text-align: left;
                }
            }
        }

        .like {
            align-content: center;
            height: 40px;
            text-align: center;
            border: 1px solid #000;
            cursor: pointer;
            font-weight: bolder;
            transition: 0.5s;

            &:hover {
                background-color: sandybrown
            }
        }
    }
`;