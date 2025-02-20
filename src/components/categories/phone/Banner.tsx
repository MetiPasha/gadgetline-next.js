import { Grid, Card, CardMedia, Container } from "@mui/material";

const HomeBanners = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={10} md={6}>
          <Card sx={{ position: "relative", maxWidth: "100%", margin: "auto" }}>
            <CardMedia
              component="img"
              height="250"
              image="/assets/phone/samsungb.webp"
              alt="samsung"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Card sx={{ position: "relative", maxWidth: "100%", margin: "auto" }}>
            <CardMedia
              component="img"
              height="250"
              image="/assets/phone/appleb.webp"
              alt="apple"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanners;
