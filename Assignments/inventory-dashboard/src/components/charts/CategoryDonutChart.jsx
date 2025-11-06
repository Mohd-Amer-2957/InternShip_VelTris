import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function CategoryDonutChart({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref.current);

    // Group item counts by category
    const counts = items.reduce((acc, it) => {
      acc[it.category] = (acc[it.category] || 0) + 1;
      return acc;
    }, {});
    const data = Object.keys(counts).map(k => ({ name: k, value: counts[k] }));

    // Same style as your example
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Items by Category',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data
        }
      ]
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [items]);

  return <div ref={ref} style={{ height: 320, width: '100%' }} />;
}
