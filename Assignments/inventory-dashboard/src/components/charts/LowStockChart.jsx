import  { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function LowStockChart({ items }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const chart = echarts.init(ref.current);
    const lowStock = items.filter(i => i.quantity <= i.reorderLevel);
    
    const option = {
      xAxis: { type: 'category', data: lowStock.map(i => i.name) },
      yAxis: { type: 'value' },
      series: [{ data: lowStock.map(i => i.quantity), type: 'bar' }]
    };
    
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
    return () => { window.removeEventListener('resize', () => chart.resize()); chart.dispose(); };
  }, [items]);

  return <div ref={ref} style={{ height: 320, width: '100%' }} />;
}