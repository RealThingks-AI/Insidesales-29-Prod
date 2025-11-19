import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
}

export const StatCard = ({ value, label, trend }: StatCardProps) => {
  return (
    <Card className="shadow-card border-border/50">
      <CardContent className="p-6">
        <div className="text-4xl font-bold text-primary mb-2">{value}</div>
        <div className="text-sm text-muted-foreground mb-1">{label}</div>
        {trend && (
          <div className="text-xs text-accent font-medium">{trend}</div>
        )}
      </CardContent>
    </Card>
  );
};
