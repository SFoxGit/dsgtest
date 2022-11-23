import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import SkinTone from "../skin-tone";
import Layer from "../layer-modal";
import mergeImages from "merge-images";
import exportAsImage from "../../utils/exportAsImage";
import Canvas from "../canvas";
import RandomButton from "../random-button/random-button";
import OffHand from "../off-hand";
import { ImageHoldingGrid, StyledPixelContainer } from "./styles";
import ItemContainer from "../item-container/ItemContainer";
import useLayerStore from "../../utils/store";

export default function Interface() {
  const [showLayerModal, setShowLayerModal] = useState(false);
  const [pixels, setPixels] = useState(200);
  const [imageConverted, setImageConverted] = useState("");
  const layerArr = useLayerStore((state) => state.layerArr);

  useEffect(() => {
    const formatData = async () => {
      const newArr = [];
      for (const layer of layerArr) {
        if (layer.assetName) {
          const importedImage = await import(
            `../../assetsV3/${layer.layerType}/${layer.assetName}/${layer.color}`
          );
          layer.display && newArr.push(importedImage.default);
        } else {
          const importedImage = await import(
            `../../assetsV3/${layer.layerType}/${layer.color}`
          );
          newArr.push(importedImage.default);
        }
      }
      mergeImages(newArr).then((res) => setImageConverted(res));
    };
    formatData();
  }, [layerArr]);

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          md={4}
          columnSpacing={2}
          pl={2}
          pr={{ xs: 0, md: 2 }}
        >
          <ImageHoldingGrid item container xs={12}>
            <Canvas srcImage={imageConverted} pixels={pixels} />
          </ImageHoldingGrid>
          <SkinTone layerArr={layerArr} />
          <OffHand layerArr={layerArr} />
          <StyledPixelContainer
            item
            container
            xs={12}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid
              item
              container
              xs={4}
              mt={2}
              p={0}
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                id="pixels"
                label="Pixels"
                type="number"
                color="primary"
                value={pixels}
                onChange={(e) => setPixels(e.target.value)}
                sx={{
                  input: { fontSize: 14, padding: "5px", textAlign: "center" },
                }}
                focused
              />
            </Grid>
            <Grid
              item
              container
              xs={4}
              mt={2}
              p={0}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                onClick={() => exportAsImage("sprite")}
              >
                <Typography variant="body1">
                  <DownloadIcon />
                </Typography>
              </Button>
            </Grid>
          </StyledPixelContainer>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            my={1}
            height="40px"
          >
            <RandomButton layerArr={layerArr} />
          </Grid>
        </Grid>
        <ItemContainer
          layerArr={layerArr}
          setShowLayerModal={setShowLayerModal}
        />
      </Grid>
      <Layer
        showLayer={showLayerModal}
        setShowLayer={setShowLayerModal}
        layerArr={layerArr}
      />
    </>
  );
}
