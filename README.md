# MMM-RPI-LED
This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

MMM-RPI-LED lets you control the LEDs of your Raspberry Pi

## Dependencies
* An Installation of [MagicMirror²](https://github.com/MichMich/MagicMirror/)
* [rpi-leds](https://github.com/taktran/rpi-leds) (Installed via `npm install`)

## Installation
Navigate into your MagicMirror's `modules` folder:

````shell
cd ~/MagicMirror/modules
````

Clone this repository:

````shell
git clone https://github.com/idoodler/MMM-RPI-LED
````

Navigate to the new `MMM-RPI-LED` folder and install the node dependencies.
````shell
npm install
````

## Update the module
Navigate into the `MMM-RPI-LED` folder with `cd ~/MagicMirror/modules/MMM-RPI-LED` and get the latest code from github with git pull.

If you haven't changed the modules, this should work without any problems. Type `git status` to see your changes, if there are any, you can reset them with `git reset --hard`. After that, `git pull` should be possible.

## Using the module
To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-RPI-LED',
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options
| Option                                | Description
|-------------------------------------- |-----------
| `ledMode`                                | *required* Defines the mode of the Raspberry Pi's LEDs<br><br>**Example:** `0` = Off, no LED is light up or `1` = Heart beat, the green LED blinks<br><br>**Type:** `number`


## License
The MIT License (MIT)

Copyright (c) 2018 David Gölzhäuser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.