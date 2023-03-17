import { useState } from "react";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";

export default function Page2() {
  const [state, setState] = useState(false);
  return (
    <Card sx={{ maxWidth: 350 }}>
      Page 2
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
  );
}
