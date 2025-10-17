import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { messages } from '@/lib/data';
import { format } from 'date-fns';
import { Wallet } from 'lucide-react';

export default function AdminMessagesPage() {
  return (
    <div>
      <h1 className="font-headline text-3xl font-bold">Contact Messages</h1>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
          <CardDescription>
            Messages sent through your portfolio's contact form.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>From</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="hidden md:table-cell">Received</TableHead>
                <TableHead className="text-right">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    <div className="font-medium">{message.name}</div>
                    <div className="text-sm text-muted-foreground">{message.email}</div>
                  </TableCell>
                  <TableCell>
                    <p className="max-w-xs truncate">{message.message}</p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {format(message.receivedAt, 'PPP p')}
                  </TableCell>
                  <TableCell className="text-right">
                    {message.walletAddress ? (
                      <Badge variant="secondary" className="gap-1">
                        <Wallet className="h-3 w-3" />
                        Web3
                      </Badge>
                    ) : (
                      <Badge variant="outline">Standard</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{messages.length}</strong> of <strong>{messages.length}</strong> messages
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
