import { useState } from "react";
import closeImg from "../assets/close.svg";
import icSafety from "../assets/ic_Safety.png";
import phone from "../assets/obraz4.png";
import iconLovePackage from "../assets/icon-love-package.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";

export default function OlMinicart() {
  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", width: "60%", gap: 3 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: 16, fontWeight: "bold" }}
            align="left"
          >
            Twój koszyk
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontSize: 12,
              textDecoration: "underline",
              fontWeight: "bold",
              alignSelf: "center",
            }}
            align="left"
          >
            Wyczyść
          </Typography>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: 11, height: 11, alignSelf: "center" }}
          src={closeImg}
          alt="lorem"
        />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Card sx={{ backgroundColor: "#D9C2F0", padding: "2px" }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ padding: "16px 0 0 16px", width: "20%" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "fit-content",
                  height: "55%",
                  objectFit: "contain",
                }}
                src={iconLovePackage}
                alt="lorem"
              />
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                width: "80%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Pakiet Love
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 12,
                  }}
                >
                  Umowa na 24 miesiące
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  Edytuj pakiet
                </Typography>
              </Box>
              <div>KOSZ</div>
            </CardContent>
          </Box>

          <Card sx={{ marginBottom: "16px" }}>
            <Box sx={{ display: "flex" }}>
              <CardContent sx={{ padding: "16px 0 0 0", width: "22%" }}>
                <CardMedia
                  component="img"
                  sx={{ height: "70%", objectFit: "contain" }}
                  src={phone}
                  alt="lorem"
                />
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  width: "78%",
                  justifyContent: "space-between",
                  paddingBottom: "16px !important",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 18,
                      fontWeight: "bold",
                      lineHeight: 1.2,
                    }}
                  >
                    Xiaomi Redmi Note 11 4/128 GB
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    Kolor: szary
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      textDecoration: "underline",
                    }}
                  >
                    Zmień telefon
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
          <Card>
            <Box sx={{ display: "flex" }}>
              <CardContent sx={{ padding: "16px 0 0 0", width: "20%" }}>
                <CardMedia
                  component="img"
                  sx={{ height: "70%", objectFit: "contain" }}
                  src={icSafety}
                  alt="lorem"
                />
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  width: "78%",
                  justifyContent: "space-between",
                  paddingBottom: "16px !important",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Cyber Tarcza
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    Bez umowy terminowej.
                    <br /> Wyłączasz, kiedy chcesz.
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Card>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Card>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Podsumowanie opłat
            </AccordionSummary>
            <AccordionDetails>
              <li>
                lorem lorem: <b>0,00 zł</b>
              </li>
              <li>
                lorem lorem: <b>0,00 zł</b>
              </li>
              <li>
                lorem lorem: <b>120,00 zł</b>
              </li>
              <li>
                lorem lorem: <b>0,00 zł</b>
              </li>
              <hr />
              <li>
                lorem lorem: <b>120,00 zł</b>
              </li>
            </AccordionDetails>
          </Accordion>
        </Card>
      </Box>
    </Container>
  );
}

{
  /* 
 <Card sx={{ maxWidth: 360 }}>
    Page 1
    <div className="w-3/4 mx-auto mt-5">
      <div className="container mx-auto px-4  border-2 border-black ">
        <Typography variant="h2" className="text-center">
          {state ? "hello" : "world"}
        </Typography>
      </div>
      <div className="my-2 flex justify-center">
        <Button variant="contained" onClick={() => setState(!state)}>
          Hello World
        </Button>
      </div>
    </div>
  </Card> 
*/
}
