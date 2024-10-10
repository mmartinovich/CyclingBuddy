import { parseString } from 'xml2js';

export async function parseGpx(fileContent: string): Promise<[number, number][]> {
  return new Promise((resolve, reject) => {
    parseString(fileContent, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const trackpoints = result.gpx.trk[0].trkseg[0].trkpt;
        const coordinates = trackpoints.map((point: any) => [
          parseFloat(point.$.lat),
          parseFloat(point.$.lon)
        ]);
        resolve(coordinates);
      }
    });
  });
}

export async function parseTcx(fileContent: string): Promise<[number, number][]> {
  return new Promise((resolve, reject) => {
    parseString(fileContent, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const trackpoints = result.TrainingCenterDatabase.Courses[0].Course[0].Track[0].Trackpoint;
        const coordinates = trackpoints.map((point: any) => [
          parseFloat(point.Position[0].LatitudeDegrees[0]),
          parseFloat(point.Position[0].LongitudeDegrees[0])
        ]);
        resolve(coordinates);
      }
    });
  });
}