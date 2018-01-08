/**
 * Functions for the Seeedstudio Grove I2C Touch Sensor.
 *
 * @author Mirek Hancl
 */


//% weight=2 color=#1174EE icon="\uf25a" block="Grove I2C Touch Sensor"
//% parts="grove_mpr121"
namespace grove_mpr121 {
    const ADDRESS = 0x5A;

    /**
     * Initialize MPR121 module.
     */
    //% weight=210
    //% blockId=grove_mpr121_init block="initialisiere Grove I2C Touch Sensor"
    //% blockExternalInputs=1
    //% parts="grove_mpr121"
    export function init(): void {
		
		// MPR121 Initialisierungswerte von Sparkfun funktionieren nicht (https://www.hackster.io/hhf/mpr121-touch-pad-an-calliope-mini-uber-i2c-2d19dc),
		// von Adafruit hingegen schon (http://multiwingspan.co.uk/micro.php?page=mpr121)
 		pins.i2cWriteNumber(ADDRESS, 0x8063, NumberFormat.UInt16BE)
		basic.pause(1)
		pins.i2cWriteNumber(ADDRESS, 0x5E00, NumberFormat.UInt16BE)
		let regval: number[] = [0x4106, 0x420C, 0x4306, 0x440C, 0x4506, 0x460C, 0x4706, 0x480C, 
                                0x4906, 0x4A0C, 0x4B06, 0x4C0C, 0x4D06, 0x4E0C, 0x4F06, 0x500C,
                                0x5106, 0x520C, 0x5306, 0x540C, 0x5506, 0x560C, 0x5706, 0x580C,
	   						    0x2B01, 0x2C01, 0x2D0E, 0x2E00, 0x2F01, 0x3005, 0x3101, 0x3200,
							    0x3300, 0x3400, 0x3500, 0x5B00, 0x5C10, 0x5D20, 0x5E8F]
							 
        for (let i = 0; i < regval.length; i++) {
			pins.i2cWriteNumber(ADDRESS, regval[i], NumberFormat.UInt16BE)
        }
    }   

	
    /**
     * Return touched feeler.
     */
    //% weight=209
    //% blockId=grove_mpr121_feeler block="welcher Fühler wird berührt?"
    //% parts="grove_mpr121"
    export function touchedFeeler(): number {
		pins.i2cWriteNumber(ADDRESS, 0x0000, NumberFormat.UInt16BE)
        let feeler: number[] = [256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 1, 2, 4, 8]
		return feeler.indexOf(pins.i2cReadNumber(ADDRESS, NumberFormat.UInt16BE));
        //return pins.i2cReadNumber(ADDRESS, NumberFormat.UInt16BE);		
    }
}