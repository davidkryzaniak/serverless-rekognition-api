# Serverless Rekognition API
Just a simple API that takes an image, runs it through the AWS Rekognition service, and returns the findings.

### To Deploy
- `git clone https://github.com/davidkryzaniak/serverless-image-tag-processor`
- `cd serverless-image-tag-processor`
- `npm install`
- `sam deploy --guided`

The API Gateway that is created will be in the displayed in the sam deploy output along with the link to get an API Key (which must be included in the request header as "x-api-key"). Base64 encode your image and POST it in the body of the request to your new endpoint.

## Results
<a href="https://www.flickr.com/photos/dave_kz/28223945764/in/datetaken/"><img src="https://live.staticflickr.com/8860/28223945764_abcf711503_z.jpg" width="640" height="427" alt="IMSA SportsCar Championship race at Road America"></a>
```JSON 
{
  "Labels": [
    {
      "Name": "Car",
      "Confidence": 99.98506927490234,
      "Instances": [
        {
          "BoundingBox": {"Width": 0.5482786297798157,"Height": 0.2690356373786926,"Left": 0.21538400650024414,"Top": 0.33203256130218506},
          "Confidence": 99.98506927490234
        }
      ],
      "Parents": [{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Transportation",
      "Confidence": 99.98506927490234,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Automobile",
      "Confidence": 99.98506927490234,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Vehicle",
      "Confidence": 99.98506927490234,
      "Instances": [],
      "Parents": [{"Name": "Transportation"}]
    },
    {
      "Name": "Sports Car",
      "Confidence": 99.26324462890625,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Car"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Race Car",
      "Confidence": 99.2466812133789,
      "Instances": [],
      "Parents": [{"Name": "Vehicle"},{"Name": "Transportation"},{"Name": "Sports Car"},{"Name": "Car"}]
    },
    {
      "Name": "Machine",
      "Confidence": 96.73455047607422,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Wheel",
      "Confidence": 96.73455047607422,
      "Instances": [
        {
          "BoundingBox": {"Width": 0.0642244815826416,"Height": 0.12592218816280365,"Left": 0.23890703916549683,"Top": 0.46937596797943115},
          "Confidence": 96.73455047607422
        },
        {
          "BoundingBox": {"Width": 0.07336044311523438,"Height": 0.13713978230953217,"Left": 0.4920804500579834,"Top": 0.4612293839454651},
          "Confidence": 94.86058807373047
        }
      ],
      "Parents": [{"Name": "Machine"}]
    },
    {
      "Name": "Tarmac",
      "Confidence": 93.40628814697266,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Asphalt",
      "Confidence": 93.40628814697266,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Tire",
      "Confidence": 84.3799057006836,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Spoke",
      "Confidence": 84.31048583984375,
      "Instances": [],
      "Parents": [{"Name": "Machine"}]
    },
    {
      "Name": "Alloy Wheel",
      "Confidence": 82.12362670898438,
      "Instances": [],
      "Parents": [{"Name": "Spoke"},{"Name": "Machine"},{"Name": "Wheel"}]
    },
    {
      "Name": "Formula One",
      "Confidence": 56.56120681762695,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Car"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Car Wheel",
      "Confidence": 56.10889434814453,
      "Instances": [],
      "Parents": [{"Name": "Tire"},{"Name": "Machine"},{"Name": "Wheel"}]
    }
  ],
  "LabelModelVersion": "2.0"
}

```

<a href="https://www.flickr.com/photos/dave_kz/21075440363/in/datetaken/" title="Seattle Aquarium"><img src="https://live.staticflickr.com/5681/21075440363_20453a1f28_z.jpg" width="640" height="427" alt="Seattle Aquarium"></a>
```JSON 
{
  "Labels": [
    {
      "Name": "Amphiprion",
      "Confidence": 98.94804382324219,
      "Instances": [],
      "Parents": [{"Name": "Sea Life"},{"Name": "Animal"},{"Name": "Fish"}]
    },
    {
      "Name": "Sea Life",
      "Confidence": 98.94804382324219,
      "Instances": [],
      "Parents": [{"Name": "Animal"}]
    },
    {
      "Name": "Fish",
      "Confidence": 98.94804382324219,
      "Instances": [],
      "Parents": [{"Name": "Animal"}]
    },
    {
      "Name": "Animal",
      "Confidence": 98.94804382324219,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Water",
      "Confidence": 98.65509796142578,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Sea Anemone",
      "Confidence": 98.47637939453125,
      "Instances": [],
      "Parents": [{"Name": "Sea Life"},{"Name": "Animal"},{"Name": "Invertebrate"}]
    },
    {
      "Name": "Invertebrate",
      "Confidence": 98.47637939453125,
      "Instances": [],
      "Parents": [{"Name": "Animal"}]
    },
    {
      "Name": "Nature",
      "Confidence": 98.41838836669922,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Outdoors",
      "Confidence": 98.09947967529297,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Ocean",
      "Confidence": 98.09947967529297,
      "Instances": [],
      "Parents": [{"Name": "Outdoors"},{"Name": "Water"},{"Name": "Nature"}]
    },
    {
      "Name": "Sea",
      "Confidence": 98.09947967529297,
      "Instances": [],
      "Parents": [{"Name": "Outdoors"},{"Name": "Water"},{"Name": "Nature"}]
    },
    {
      "Name": "Reef",
      "Confidence": 97.85020446777344,
      "Instances": [],
      "Parents": [{"Name": "Outdoors"},{"Name": "Water"},{"Name": "Sea Life"},{"Name": "Sea"},{"Name": "Nature"},{"Name": "Animal"}]
    },
    {
      "Name": "Coral Reef",
      "Confidence": 90.63827514648438,
      "Instances": [],
      "Parents": [{"Name": "Outdoors"},{"Name": "Water"},{"Name": "Reef"},{"Name": "Sea Life"},{"Name": "Sea"},{"Name": "Nature"},{"Name": "Animal"}]
    },
    {
      "Name": "Human",
      "Confidence": 75.16163635253906,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Person",
      "Confidence": 75.16163635253906,
      "Instances": [
        {
          "BoundingBox": {"Width": 0.6734944581985474,"Height": 0.7983891367912292,"Left": 0.304890900850296,"Top": 0.16573677957057953},
          "Confidence": 75.16163635253906
        }
      ],
      "Parents": []
    },
    {
      "Name": "Toy",
      "Confidence": 60.241512298583984,
      "Instances": [
        {
          "BoundingBox": {"Width": 0.2768564820289612,"Height": 0.33352094888687134,"Left": 0.24342240393161774,"Top": 0.43816694617271423},
          "Confidence": 60.241512298583984
        }
      ],
      "Parents": []
    },
    {
      "Name": "Aquatic",
      "Confidence": 57.20334243774414,
      "Instances": [],
      "Parents": [{"Name": "Water"}]
    }
  ],
  "LabelModelVersion": "2.0"
}
```

<a href="https://www.flickr.com/photos/dave_kz/21507090770/in/datetaken/" title="Port of Seattle"><img src="https://live.staticflickr.com/5633/21507090770_49e79bb186_z.jpg" width="640" height="427" alt="Port of Seattle"></a>
```JSON 
{
  "Labels": [
    {
      "Name": "Vehicle",
      "Confidence": 99.78226470947266,
      "Instances": [],
      "Parents": [{"Name": "Transportation"}]
    },
    {
      "Name": "Transportation",
      "Confidence": 99.78226470947266,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Boat",
      "Confidence": 99.78226470947266,
      "Instances": [
        {
          "BoundingBox": {"Width": 0.5172755718231201,"Height": 0.5170924663543701,"Left": 0.22294089198112488,"Top": 0.16657888889312744},
          "Confidence": 99.78226470947266
        },
        {
          "BoundingBox": {"Width": 0.1988508701324463,"Height": 0.3468070328235626,"Left": 0.7006598114967346,"Top": 0.2960723638534546},
          "Confidence": 96.91434478759766
        }
      ],
      "Parents": [{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Vessel",
      "Confidence": 98.3938980102539,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Watercraft",
      "Confidence": 98.3938980102539,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Water",
      "Confidence": 97.70823669433594,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Waterfront",
      "Confidence": 96.37374877929688,
      "Instances": [],
      "Parents": [{"Name": "Water"}]
    },
    {
      "Name": "Pier",
      "Confidence": 90.38790893554688,
      "Instances": [],
      "Parents": [{"Name": "Water"},{"Name": "Waterfront"}]
    },
    {
      "Name": "Port",
      "Confidence": 90.38790893554688,
      "Instances": [],
      "Parents": [{"Name": "Water"},{"Name": "Waterfront"}]
    },
    {
      "Name": "Dock",
      "Confidence": 90.38790893554688,
      "Instances": [],
      "Parents": [{"Name": "Water"},{"Name": "Waterfront"}]
    },
    {
      "Name": "Military",
      "Confidence": 84.1561508178711,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Harbor",
      "Confidence": 79.83270263671875,
      "Instances": [],
      "Parents": [{"Name": "Pier"},{"Name": "Water"},{"Name": "Waterfront"}]
    },
    {
      "Name": "Ship",
      "Confidence": 74.85546112060547,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Ferry",
      "Confidence": 72.0809555053711,
      "Instances": [],
      "Parents": [{"Name": "Transportation"},{"Name": "Boat"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Barge",
      "Confidence": 64.17400360107422,
      "Instances": [],
      "Parents": [{"Name": "Watercraft"},{"Name": "Transportation"},{"Name": "Boat"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Person",
      "Confidence": 63.499691009521484,
      "Instances": [
        {
          "BoundingBox": {"Width": 0.01347285509109497,"Height": 0.021463269367814064,"Left": 0.40232303738594055,"Top": 0.5565089583396912},
          "Confidence": 63.499691009521484
        }
      ],
      "Parents": []
    },
    {
      "Name": "Human",
      "Confidence": 63.499691009521484,
      "Instances": [],
      "Parents": []
    },
    {
      "Name": "Navy",
      "Confidence": 59.58894729614258,
      "Instances": [],
      "Parents": [{"Name": "Military"}]
    },
    {
      "Name": "Cruiser",
      "Confidence": 59.58894729614258,
      "Instances": [],
      "Parents": [{"Name": "Ship"},{"Name": "Navy"},{"Name": "Military"},{"Name": "Transportation"},{"Name": "Vehicle"}]
    },
    {
      "Name": "Battleship",
      "Confidence": 55.368446350097656,
      "Instances": [],
      "Parents": [{"Name": "Ship"},{"Name": "Navy"},{"Name": "Military"},{"Name": "Transportation"},{"Name": "Vehicle"}]
    }
  ],
  "LabelModelVersion": "2.0"
}
```
