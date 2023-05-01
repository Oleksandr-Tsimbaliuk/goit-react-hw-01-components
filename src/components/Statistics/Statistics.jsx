import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsList,
  StatisticsElement,
  ElementLabel,
  ElementPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsList>
        {stats.map(el => {
          const { id, label, percentage } = el;
          return (
            <StatisticsElement key={id}>
              <ElementLabel>{label}</ElementLabel>
              <ElementPercentage>{percentage}%</ElementPercentage>
            </StatisticsElement>
          );
        })}
      </StatisticsList>
    </StatisticsCard>
  );
};
