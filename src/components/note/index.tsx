import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

interface NoteProps {
  title?: string;
  description?: string;
}
const Note = (props:NoteProps) => {
    const { title, description } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};


export default Note