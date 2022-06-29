import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RankingCard from "./RankingCard";
import { urlConsts } from "../../../assets/utils/RequestData";
import FetchData from "../../../assets/utils/FetchData";

export default function RankingDialog({ eventName, open, handleClose }) {
  const { data, loading, error } = FetchData({
    method: "POST",
    url: "fetchRankData",
    payload: {
      caller: urlConsts.caller,
      sportID: urlConsts.sportID,
      eventName: eventName,
      filterData: "z37CQ3th8i73SQogk",
    },
    pathname: eventName,
  });

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        sx={{ margin: "-1.5rem" }}
      >
        <DialogActions
          sx={{
            padding: "1rem",
            marginBottom: {
              xs: "-2rem",
              md: "-3rem",
            },
            zIndex: "3000",
            cursor: "pointer",
          }}
        >
          <CloseIcon onClick={handleClose} />
        </DialogActions>
        <DialogTitle sx={{ textAlign: "center" }}>
          {eventName.toUpperCase()}
        </DialogTitle>
        <Divider sx={{ margin: "0 1rem" }} />
        <DialogContent>
          <RankingCard loading={loading} eventData={data.data} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
