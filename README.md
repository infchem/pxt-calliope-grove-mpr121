# pxt-calliope-grove-mpr121 - Grove I2C Touch Sensor

Read up to 12 different feelers with MakeCode, your micro:bit or Calliope mini.
The read block returns the touched feeler id, -1 if multiple feelers are touched, -2 if no feeler is touched. 

## MakeCode Blocks Example
* English
![alt text](https://github.com/infchem/pxt-calliope-grove-mpr121/raw/master/mc_example_en.png "MakeCode Blocks Example English")
* German 
![alt text](https://github.com/infchem/pxt-calliope-grove-mpr121/raw/master/mc_example_de.png "MakeCode Blocks Example German")

## MakeCode JavaScript Example

```javascript
grove_mpr121.init()

basic.forever(() => {
    basic.showNumber(grove_mpr121.touchedFeeler())
})
```

## License

Copyright (C) 2017 Mirek Hancl

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

* for PXT/microbit
* for PXT/calliope
