import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/10445568/pexels-photo-10445568.jpeg?cs=srgb&dl=pexels-tokuo-nobuhiro-10445568.jpg&fm=jpg"
            title="My Post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              My First Post
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              necessitatibus quae voluptatem in labore, perspiciatis
              consequuntur commodi delectus quisquam quam consequatur impedit
              ducimus voluptates culpa quis aperiam molestias et ex! Perferendis
              exercitationem nesciunt quidem dolorum neque assumenda ipsa
              laborum fugit!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
