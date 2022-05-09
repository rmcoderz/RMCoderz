import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getCategories } from "../../ServicesQl";
import Link from "next/link";

const Categories = ({ isMobile }) => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setcategories(newCategories));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#003030",
        padding: "20px",
        margin: "10px 0px 20px 0px",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#ffffe6",
          margin: "0px 10px",
          borderBottom: "2px solid #ffffe6",
          paddingBottom: "10px",
          fontSize: isMobile ? "18px" : "24px",
        }}
      >
        Categories
      </Typography>
      {categories.map((categories) => (
        <Link
          passHref
          href={`/category/${categories.slug}`}
          key={categories.name}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffffe6",
              margin: "15px",
              cursor: "pointer",
              fontSize: isMobile ? "16px" : "20px",
            }}
          >
            {categories.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Categories;
