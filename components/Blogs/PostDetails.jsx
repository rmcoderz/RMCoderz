import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const PostDetails = ({ blog, isMobile }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.openInNewTab) {
        modifiedText = (
          <b key={index}>
            <a key={index} href={obj.href}>
              {obj.children[0].text}
            </a>
          </b>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <Box>
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          image={blog.featuredimage.url}
          sx={{
            width: isMobile ? "none" : "500px",
            height: isMobile ? "400px" : "500px",
            objectFit: "cover",
            margin: isMobile ? "0px" : "10px auto",
          }}
        />
        <CardContent
          sx={{
            padding: isMobile ? "10px" : "20px",
            backgroundColor: "#ffffe6",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt={blog.author.name}
                src={blog.author.photo.url}
                sx={{
                  width: 56,
                  height: 56,
                  border: "2px solid #e6e6e6",
                  boxShadow: "0px 0px 20px #888888",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#003030",
                    margin: "0px 10px",
                    fontSize: isMobile ? "18px" : "24px",
                  }}
                >
                  {blog.author.name}
                </Typography>
                {isMobile && (
                  <>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#003030",
                        margin: "0px 10px",
                        fontSize: isMobile ? "16px" : "20px",
                      }}
                    >
                      {moment(blog.createdAt).format("MMM DD, YYYY")}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CalendarMonthIcon
                  sx={{
                    color: "#003030",
                    margin: "0px",
                    fontSize: isMobile ? "30px" : "56px",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#003030",
                    margin: "0px 10px",
                    fontSize: isMobile ? "16px" : "20px",
                  }}
                >
                  {moment(blog.createdAt).format("MMM DD, YYYY")}
                </Typography>
              </Box>
            )}
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px 20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "30px" : "60px",
                color: "#003030",
              }}
            >
              {blog.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#003030",
                margin: "0px 10px",
                fontSize: isMobile ? "16px" : "24px",
              }}
            >
              {blog.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) =>
                  getContentFragment(itemindex, item.text, item),
                );

                return getContentFragment(
                  index,
                  children,
                  typeObj,
                  typeObj.type,
                );
              })}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostDetails;
