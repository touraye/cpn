import getUserMeter from "@/actions/getUserMeter";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TableComponent =async ()  => {
  const { meters, error } = await getUserMeter();
  console.log(meters?.map(m=>m.createdAt.toISOString()));
  
    
    if (error) {
        return <p>{error}</p>
    }

    return ( 
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Meter Name</TableHead>
      <TableHead>Meter Number</TableHead>
      <TableHead>Token</TableHead>
      <TableHead className="text-right">User</TableHead>
    </TableRow>
  </TableHeader>
        <TableBody>
          {
            meters && meters.map(meter => (
            <TableRow key={meter.id}>
              <TableCell className="font-medium">{meter.meterName}</TableCell>
                <TableCell>{ meter.meterNumber }</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
              
            ))
          }                       
  </TableBody>
</Table>
 );
}
 
export default TableComponent;