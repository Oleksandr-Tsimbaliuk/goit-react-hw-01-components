import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  border: 1px dashed;
  width: 400px;
  height: 100%;
`;
export const StatisticsTitle = styled.h2`
  border: 1px dashed;
  margin: 0;
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
    height: 50px;

}
`;
export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  //   margin-top: 15px;
  //   margin-bottom: 5px;

  list-style: none;
  display: flex;

  justify-content: space-around;
`;
export const StatisticsElement = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  //   padding: 10px;
`;
export const ElementLabel = styled.span``;
export const ElementPercentage = styled.span``;
