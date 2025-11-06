import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule, themeQuartz } from 'ag-grid-community';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchInventory } from '../api/inventoryApi';
import { Button } from 'antd';


// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);



export default function InventoryTable({ onEdit, role }) {
  const queryClient = useQueryClient();


  const { data: items = [], isLoading } = useQuery({
    queryKey: ['inventory'],
    queryFn: fetchInventory,
    staleTime: Infinity,
    gcTime: Infinity,
  });



  const columnDefs = useMemo(
    () => [
      { field: 'id', headerName: 'Item ID', sortable: true, filter: true, width: 120 },
      { field: 'name', headerName: 'Item Name', sortable: true, filter: true, flex: 1 },
      { field: 'category', headerName: 'Category', width: 140 },
      { field: 'price', headerName: 'Price', width: 100 },
      { field: 'quantity', headerName: 'Quantity', width: 110 },
      { field: 'reorderLevel', headerName: 'Reorder Level', width: 140 },
      { field: 'supplier', headerName: 'Supplier', width: 160 },
      { field: 'lastUpdated', headerName: 'Last Updated', width: 180 },
      { field: 'status', headerName: 'Status', width: 130 },
      {
        headerName: 'Actions',
        width: 120,
        cellRenderer: ({ data }) => {
          const role = localStorage.getItem('role');
          return role === 'admin' ? (
            <Button size="small" onClick={() => onEdit(data)}>Edit</Button>
          ) : (
            <Button size="small" disabled>Edit</Button>
          );
        },
      },
    ],
    [onEdit]
  );



  // Compute the status for each item dynamically
  const rowData = items.map((i) => ({
    ...i,
    status: i.quantity <= i.reorderLevel ? 'Low Stock' : 'In Stock',
  }));

  return (
    <div style={{ height: 520, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true }}
        theme={themeQuartz}
      />
    </div>
  );
}
