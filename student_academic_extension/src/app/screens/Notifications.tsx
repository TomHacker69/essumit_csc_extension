import { Card, CardContent } from '../components/ui/card'
import { CheckCircle2, Circle, Filter } from 'lucide-react'

const notifications = [
  { id: 1, title: 'New Notice: Mid-term schedule released', time: '2 hours ago', read: false, type: 'notice' },
  { id: 2, title: 'Assignment due: Data Structures Lab', time: '5 hours ago', read: false, type: 'assignment' },
  { id: 3, title: 'Attendance alert: DBMS below 75%', time: '1 day ago', read: true, type: 'attendance' },
  { id: 4, title: 'Result announced: Semester 5', time: '2 days ago', read: true, type: 'result' },
  { id: 5, title: 'Exam reminder: OS viva tomorrow', time: '3 days ago', read: true, type: 'exam' },
]

export default function Notifications() {
  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-muted-foreground text-sm">Academic updates and alerts</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 border border-border rounded-md text-sm">
            <Filter size={16} />
            Filter
          </button>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm">
            Mark all read
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {notifications.map((n) => (
          <Card key={n.id} className={`${n.read ? 'opacity-75' : 'border-l-4 border-l-primary'}`}>
            <CardContent className="flex items-start gap-3 py-4">
              <div className={`mt-0.5 ${n.read ? 'text-muted-foreground' : 'text-primary'}`}>
                {n.read ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">
                {n.type}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
