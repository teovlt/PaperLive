import React from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis, Label } from 'recharts';
import { Heading3, SectionContainer } from '../../../theme/appElements';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ProductionCost = ({ contributions }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const data3 = Object.entries(
    contributions
      .filter((c) => c.state === 'approved')
      .reduce((acc, c) => {
        c.submissions.flatMap((s) => {
          const { _id: id, title } = c;
          const { materialCost, authors } = s;

          acc[id] = {
            title,
            cost:
              (acc[id]?.cost ?? 0) +
              authors.reduce(
                (acc, curr) => (acc += curr.hourlyCost * curr.workTime * 21.67 * 7),
                0
              ),
          };
        });
        return acc;
      }, {})
  )
    .map(([id, data]) => ({ id, ...data }))
    .sort((a, b) => b.cost - a.cost)
    .filter((c) => c.cost !== 0);

  return (
    <SectionContainer>
      <Heading3>{t('statistics.data3.title')}</Heading3>

      <BarChart width={752} height={500} margin={{ top: 15 }} data={data3}>
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip cursor={{ fill: 'transparent' }} />

        <XAxis dataKey='title' tick={null} />

        <YAxis dataKey='cost' tick={{ fontSize: 12 }}>
          <Label
            value={t('statistics.data3.label')}
            offset={20}
            angle={-90}
            fontSize={12}
            textAnchor='middle'
          />
        </YAxis>

        <Bar
          dataKey='cost'
          name={t('statistics.data3.bar')}
          formatter={(value) => `${value} ${t('statistics.euros')}`}
          fill='var(--accent)'
          cursor='pointer'
          onClick={(data) => navigate(`/contributions/${data.id}`)}
        />
      </BarChart>
    </SectionContainer>
  );
};

export default ProductionCost;