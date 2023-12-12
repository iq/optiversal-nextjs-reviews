import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Rating,
  Chip,
  Grid,
  Container,
} from "@mui/material";

import { ProductReviewProps } from "@/types/ProductReview.types";
import OpenAIQuery from "./OpenAIQuery";

const ProductReview = (props: ProductReviewProps) => {
  const { review } = props;

  return (
    <Container disableGutters>
      <OpenAIQuery text={review.reviewText} />

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5">{review.summary}</Typography>
            </Grid>
            <Grid item>
              <Rating value={review.overall} readOnly />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {review.reviewText}
              </Typography>
            </Grid>
            <Grid item>
              <Box>
                {review.image &&
                  review.image.map((imgUrl, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="140"
                      image={imgUrl}
                      alt={`Review Image ${index + 1}`}
                    />
                  ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.primary">
                Reviewed by: {review.reviewerName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Date: {review.reviewTime}
              </Typography>
            </Grid>
            {review.verified && (
              <Grid item>
                <Chip label="Verified Purchase" color="primary" />
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductReview;