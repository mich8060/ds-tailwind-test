import { Button, Card, CardContent, CardHeader, CardTitle } from "@chg-ds/unified-design-system"
import "@chg-ds/unified-design-system/styles.css"

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <CardHeader>
          <CardTitle>Consumer fixture</CardTitle>
        </CardHeader>
        <CardContent>
          <Button type="button" variant="default">
            Button from @chg-ds/unified-design-system
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
