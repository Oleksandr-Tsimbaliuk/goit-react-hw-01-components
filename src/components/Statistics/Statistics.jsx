import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
