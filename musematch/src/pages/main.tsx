import { Card, CardContent, Typography, Container, Paper, Stack } from '@mui/material';

const feedPosts = [
  {
    id: 1,
    title: "Alumni Spotlight: Jane Doe",
    date: "November 1, 2024",
    content: "Jane has recently launched a new exhibit at the Downtown Art Gallery, showcasing her latest work.",
  },
  {
    id: 2,
    title: "Upcoming Workshop: Creative Writing",
    date: "October 30, 2024",
    content: "Join us for a creative writing workshop led by LMCC alum John Smith. Register now!",
  },
  {
    id: 3,
    title: "Funding Opportunities Available",
    date: "October 28, 2024",
    content: "We are offering grants for Manhattan-based artists to support community engagement projects.",
  },
  {
    id: 4,
    title: "Networking Event: Meet the Alumni",
    date: "October 25, 2024",
    content: "Join us for a networking event on November 5th to connect with fellow LMCC alumni!",
  },
  {
    id: 5,
    title: "Art Exhibition: Collective Voices",
    date: "October 22, 2024",
    content: "An exhibition featuring works from LMCC artists will be held at the Main Gallery starting next week.",
  },
  {
    id: 6,
    title: "Grant Application Deadline Approaching",
    date: "October 20, 2024",
    content: "Don't forget, the deadline for the LMCC grant applications is November 15th!",
  },
  {
    id: 7,
    title: "New Artist Residency Program",
    date: "October 18, 2024",
    content: "We are excited to announce a new artist residency program aimed at fostering innovative projects.",
  },
  {
    id: 8,
    title: "Volunteer Opportunities with LMCC",
    date: "October 15, 2024",
    content: "Looking for volunteers for upcoming events? Check out our website for details!",
  },
];

export const Main = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: '80px', overflow: 'hidden', maxHeight: 'calc(150vh - 80px)' }}
    >
      <Typography variant="h4" gutterBottom>
        Alumni Community Feed
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          height: 'calc(100vh - 120px)', // Adjust as necessary for header and padding
          overflowY: 'auto',
          scrollbarWidth: 'none', // Firefox
          'msOverflowStyle': 'none', // IE and Edge
        }}
      >
        <style>{`
          /* Hide scrollbar for Chrome, Safari, and Opera */
          .MuiPaper-root::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <Stack spacing={2}>
          {feedPosts.map((post) => (
            <Card variant="outlined" key={post.id}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {post.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
};
