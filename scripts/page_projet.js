const in_dev = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M79.250 17.017 C 80.144 17.297,82.900 18.150,85.375 18.914 C 120.446 29.729,154.153 49.121,176.125 71.123 C 198.468 93.496,209.881 113.626,207.762 126.924 C 206.776 133.110,205.561 134.854,194.641 145.749 L 186.999 153.373 213.811 180.186 L 240.624 207.000 254.546 193.079 L 268.468 179.159 271.046 181.548 C 280.437 190.251,288.440 198.588,289.476 200.750 C 292.198 206.427,292.379 214.765,289.907 220.685 C 289.052 222.733,288.911 223.971,289.247 226.450 L 289.543 228.625 305.209 244.256 C 317.838 256.856,321.190 260.069,322.500 260.825 C 328.643 264.371,336.077 263.510,341.188 258.660 C 342.222 257.678,353.610 246.242,366.493 233.246 C 389.874 209.661,389.920 209.612,390.964 207.496 C 392.837 203.696,393.198 199.771,392.021 196.000 C 390.945 192.557,390.581 192.137,374.202 175.499 L 358.779 159.831 356.952 159.290 C 354.533 158.573,353.603 158.606,350.991 159.503 C 344.660 161.677,336.401 161.401,331.006 158.836 C 329.227 157.990,328.592 157.410,319.262 148.113 L 309.398 138.284 311.454 136.143 C 317.036 130.328,318.478 122.699,315.111 116.797 C 314.220 115.236,242.130 43.013,239.454 41.001 C 221.155 27.241,161.902 17.827,86.125 16.640 L 77.625 16.507 79.250 17.017 M84.841 255.562 C -5.207 345.643,1.834 338.344,0.715 342.772 C -0.292 346.753,0.445 351.092,2.721 354.577 C 4.945 357.982,38.293 390.777,40.750 391.974 C 44.569 393.835,48.269 394.179,52.000 393.019 C 55.857 391.819,50.562 396.957,138.563 309.012 L 220.252 227.375 193.438 200.562 L 166.624 173.750 84.841 255.562 " stroke="none" fill="yellow" fill-rule="evenodd"></path></g></svg>`
const finish = `<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="325.7142857142857" viewBox="0, 0, 400,325.7142857142857"><g id="svgg"><path id="path0" d="M341.429 0.861 C 330.956 2.370,321.226 7.471,312.448 16.053 C 309.883 18.561,268.361 60.837,220.177 110.000 C 171.993 159.163,132.446 199.388,132.297 199.388 C 132.147 199.388,121.592 188.735,108.842 175.714 C 81.582 147.878,79.570 146.120,70.797 142.467 C 30.285 125.602,-11.126 164.701,2.664 206.797 C 5.886 216.632,9.386 221.653,21.826 234.286 C 26.799 239.337,44.882 257.796,62.009 275.306 C 99.003 313.127,98.223 312.352,102.513 315.533 C 120.178 328.631,144.296 328.565,162.449 315.369 C 165.766 312.957,381.725 93.273,387.824 86.107 C 418.317 50.273,387.788 -5.820,341.429 0.861 M354.914 27.149 C 372.570 31.637,380.202 53.169,369.363 67.918 C 368.452 69.158,220.616 220.244,153.673 288.349 C 145.476 296.688,141.660 298.715,133.455 299.087 C 123.703 299.528,120.682 297.865,107.721 284.920 C 79.576 256.809,30.739 206.549,29.438 204.357 C 24.338 195.763,24.481 184.304,29.789 176.173 C 37.604 164.201,53.251 160.927,65.092 168.787 C 66.350 169.622,79.002 182.210,95.142 198.686 C 110.474 214.337,125.096 229.255,127.636 231.837 L 132.253 236.531 138.495 230.204 C 141.929 226.724,186.485 181.265,237.509 129.184 C 288.532 77.102,331.301 33.605,332.550 32.524 C 338.454 27.414,347.452 25.252,354.914 27.149 " stroke="none" fill="green" fill-rule="evenodd"></path></g></svg>`
const pause = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M186.122 0.469 C 91.308 7.011,13.572 80.343,1.651 174.490 C -12.890 289.320,72.008 392.119,187.544 399.579 C 291.887 406.316,384.387 330.355,398.153 226.626 C 414.818 101.058,312.346 -8.241,186.122 0.469 M212.265 37.978 C 342.231 48.090,408.225 200.112,326.724 301.646 C 248.295 399.353,92.396 374.689,48.011 257.551 C 6.041 146.783,94.299 28.800,212.265 37.978 M132.649 129.490 C 131.907 129.995,130.915 130.927,130.446 131.560 L 129.592 132.713 129.486 196.628 C 129.367 268.780,129.091 262.579,132.515 264.898 L 134.021 265.918 156.704 266.035 C 181.744 266.164,181.717 266.167,183.855 263.626 C 185.758 261.364,185.730 262.455,185.617 196.264 C 185.497 125.695,185.778 131.794,182.554 129.604 L 181.035 128.571 157.517 128.571 L 133.998 128.571 132.649 129.490 M213.994 129.426 C 213.272 129.888,212.261 130.941,211.749 131.766 L 210.816 133.265 210.708 196.259 C 210.594 262.469,210.565 261.360,212.471 263.626 C 214.609 266.166,214.585 266.164,239.592 266.035 L 262.245 265.918 263.788 264.959 C 267.242 262.811,266.960 269.120,266.841 196.773 L 266.735 132.713 265.881 131.560 C 265.411 130.927,264.420 129.995,263.678 129.490 L 262.328 128.571 238.817 128.578 C 215.782 128.585,215.280 128.602,213.994 129.426 " stroke="none" fill="orange" fill-rule="evenodd"></path></g></svg>`
const sans_suite = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M18.980 0.675 C 2.525 4.178,-5.369 24.145,3.945 38.704 C 4.850 40.120,34.124 69.626,85.028 120.433 L 164.694 199.946 84.424 280.279 C -4.972 369.747,2.163 362.148,0.644 369.502 C -3.193 388.078,11.934 403.191,30.522 399.351 C 38.315 397.742,30.050 405.501,121.120 314.297 L 199.996 235.306 279.530 314.967 C 330.507 366.025,359.863 395.138,361.288 396.050 C 380.273 408.195,403.933 391.674,399.351 369.473 C 397.751 361.719,404.602 369.015,314.108 278.704 L 235.306 200.062 315.747 119.521 C 405.701 29.454,397.797 37.880,399.393 30.349 C 404.063 8.308,380.251 -8.181,361.280 3.955 C 359.843 4.875,330.747 33.740,279.550 85.038 L 200.053 164.694 120.332 85.020 C 76.486 41.199,40.153 4.994,39.592 4.564 C 34.570 0.718,26.198 -0.862,18.980 0.675 " stroke="none" fill="red" fill-rule="evenodd"></path></g></svg>`

const privee = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="488.77805486284285" viewBox="0, 0, 400,488.77805486284285"><g id="svgg"><path id="path0" d="M189.277 0.291 C 188.180 0.398,184.813 0.732,181.796 1.032 C 114.567 7.723,55.843 64.395,46.170 131.920 C 44.694 142.228,44.398 151.388,44.393 186.908 L 44.389 222.444 36.284 222.451 C 18.408 222.468,6.693 230.102,1.637 245.030 L 0.249 249.127 0.117 353.616 C -0.032 470.550,-0.268 462.535,3.555 470.324 C 6.497 476.317,12.465 482.284,18.454 485.221 C 26.305 489.071,10.395 488.761,200.000 488.761 C 389.605 488.761,373.695 489.071,381.546 485.221 C 387.535 482.284,393.503 476.317,396.445 470.324 C 400.268 462.535,400.032 470.550,399.883 353.616 L 399.751 249.127 398.363 245.030 C 393.161 229.672,380.924 222.012,361.510 221.961 L 355.688 221.945 355.463 181.920 C 355.234 141.198,355.167 139.646,353.106 127.568 C 342.857 67.487,292.276 15.389,232.374 3.213 C 220.744 0.849,198.809 -0.638,189.277 0.291 M213.402 67.610 C 247.391 72.593,276.907 98.526,285.601 131.044 C 288.512 141.934,288.414 140.252,288.629 182.918 L 288.828 222.444 200.000 222.444 L 111.172 222.444 111.371 182.918 C 111.541 149.166,111.687 142.826,112.368 139.522 C 122.317 91.311,165.486 60.585,213.402 67.610 " stroke="none" fill="red" fill-rule="evenodd"></path></g></svg>`
const public = `<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="404.4943820224719" viewBox="0, 0, 400,404.4943820224719"><g id="svgg"><path id="path0" d="M273.876 1.715 C 260.736 5.049,244.426 13.147,236.517 20.265 C 235.435 21.238,235.056 21.695,235.674 21.280 C 236.785 20.533,236.786 20.539,235.728 21.779 C 234.631 23.064,233.929 23.478,234.551 22.472 C 235.874 20.330,232.708 22.943,226.702 28.949 C 220.589 35.062,217.499 38.892,220.646 36.455 C 221.446 35.835,221.430 35.927,220.559 36.948 C 219.390 38.318,218.795 38.613,219.445 37.500 C 219.671 37.114,219.307 37.279,218.636 37.868 C 217.187 39.139,216.979 40.364,218.399 39.264 C 219.199 38.644,219.183 38.736,218.312 39.757 C 217.146 41.123,216.537 41.428,217.210 40.309 C 217.496 39.832,217.327 39.854,216.681 40.378 C 215.584 41.268,215.386 42.399,216.433 41.797 C 216.841 41.562,216.939 41.607,216.667 41.904 C 216.409 42.186,215.925 42.416,215.590 42.416 C 215.255 42.416,214.864 42.767,214.721 43.196 C 214.543 43.730,214.706 43.835,215.236 43.527 C 215.694 43.262,215.819 43.288,215.543 43.590 C 215.286 43.871,214.801 44.101,214.466 44.101 C 214.132 44.101,213.741 44.452,213.598 44.882 C 213.420 45.415,213.582 45.520,214.113 45.213 C 214.570 44.948,214.696 44.973,214.419 45.275 C 214.162 45.556,213.677 45.787,213.343 45.787 C 213.008 45.787,212.617 46.138,212.474 46.567 C 212.301 47.087,212.454 47.199,212.935 46.902 C 213.412 46.607,213.519 46.679,213.250 47.113 C 213.027 47.475,212.619 47.632,212.345 47.463 C 211.667 47.044,209.967 50.434,210.457 51.227 C 210.692 51.606,210.596 51.703,210.217 51.469 C 209.820 51.224,208.762 52.717,207.371 55.484 C 203.764 62.657,200.976 70.049,202.871 67.416 C 203.375 66.715,203.421 66.746,203.143 67.602 C 202.959 68.168,202.805 68.927,202.800 69.288 C 202.795 69.700,202.609 69.655,202.300 69.167 C 201.952 68.618,201.556 69.274,200.943 71.415 C 196.660 86.374,196.629 86.859,196.629 138.977 L 196.629 184.831 98.174 184.970 L -0.281 185.108 98.876 185.393 L 198.034 185.679 99.017 185.817 L 0.000 185.955 0.000 295.225 L 0.000 404.494 129.494 404.494 L 258.989 404.494 258.989 295.225 L 258.989 185.955 244.522 185.829 L 230.056 185.703 244.663 185.393 L 259.270 185.084 245.625 184.958 L 231.981 184.831 232.142 136.938 C 232.231 110.597,232.147 89.930,231.956 91.011 C 231.757 92.138,231.577 92.454,231.535 91.750 C 231.445 90.264,233.037 82.493,233.521 82.054 C 233.711 81.882,233.721 82.374,233.544 83.146 C 232.538 87.540,232.780 88.327,233.889 84.270 C 234.608 81.643,235.383 78.862,235.612 78.090 C 235.927 77.027,235.885 76.890,235.439 77.528 C 235.070 78.054,234.845 78.117,234.840 77.696 C 234.835 77.326,235.187 76.820,235.622 76.573 C 236.674 75.976,239.417 69.703,238.954 68.954 C 238.747 68.619,238.860 68.532,239.215 68.752 C 239.577 68.975,240.204 68.433,240.706 67.462 C 241.757 65.431,241.795 64.974,240.871 65.506 C 240.463 65.741,240.365 65.696,240.637 65.399 C 240.894 65.118,241.379 64.888,241.713 64.888 C 242.048 64.888,242.439 64.536,242.582 64.107 C 242.760 63.573,242.597 63.469,242.067 63.776 C 241.610 64.041,241.484 64.016,241.760 63.714 C 242.018 63.432,242.502 63.202,242.837 63.202 C 243.172 63.202,243.563 62.851,243.706 62.422 C 243.879 61.902,243.725 61.790,243.245 62.087 C 242.757 62.388,242.661 62.310,242.947 61.847 C 243.180 61.470,243.512 61.302,243.684 61.475 C 244.088 61.878,245.506 60.711,245.506 59.975 C 245.506 59.666,245.063 59.756,244.522 60.174 C 243.722 60.794,243.738 60.702,244.610 59.681 C 245.722 58.377,246.405 57.988,245.766 59.022 C 245.563 59.350,248.013 56.999,251.210 53.798 C 260.894 44.103,270.806 38.618,284.551 35.349 C 287.948 34.541,288.359 34.357,286.236 34.596 C 280.580 35.233,269.246 39.629,262.360 43.858 C 260.446 45.033,260.431 45.034,261.798 43.890 C 270.570 36.544,291.002 31.514,305.653 33.093 C 319.145 34.547,336.869 42.072,343.055 48.973 C 343.630 49.615,342.216 48.726,339.913 46.997 C 335.914 43.996,329.213 40.045,329.213 40.688 C 329.213 40.855,330.414 41.606,331.882 42.356 C 336.509 44.720,342.590 49.344,347.338 54.107 C 349.860 56.638,351.558 58.202,351.112 57.584 C 350.309 56.472,350.313 56.472,351.555 57.531 C 352.840 58.627,353.253 59.329,352.247 58.708 C 351.298 58.121,351.626 59.364,352.636 60.184 C 353.456 60.849,353.518 60.839,353.090 60.112 C 352.662 59.386,352.724 59.376,353.544 60.041 C 354.613 60.908,354.832 61.511,353.860 60.910 C 353.474 60.672,353.327 60.824,353.485 61.298 C 353.628 61.727,354.019 62.079,354.354 62.079 C 354.689 62.079,355.173 62.309,355.431 62.590 C 355.707 62.892,355.581 62.918,355.124 62.652 C 354.594 62.345,354.431 62.450,354.609 62.984 C 354.752 63.413,355.143 63.764,355.478 63.764 C 355.812 63.764,356.297 63.994,356.554 64.275 C 356.831 64.577,356.705 64.603,356.247 64.338 C 355.717 64.030,355.554 64.135,355.732 64.669 C 355.875 65.098,356.266 65.449,356.601 65.449 C 356.936 65.449,357.420 65.680,357.678 65.961 C 357.950 66.258,357.852 66.303,357.444 66.068 C 356.476 65.511,356.558 65.977,357.887 68.582 C 358.573 69.926,359.283 70.671,359.659 70.439 C 360.046 70.199,360.128 70.306,359.874 70.718 C 359.647 71.085,360.219 73.210,361.144 75.440 C 362.699 79.186,363.652 82.360,365.277 89.207 C 365.699 90.983,366.021 107.476,366.257 139.326 L 366.608 186.798 366.731 142.815 C 366.860 96.619,366.680 92.069,364.382 83.462 C 363.665 80.779,363.278 78.790,363.521 79.040 C 364.295 79.836,366.231 88.330,366.829 93.553 C 367.176 96.585,367.408 116.120,367.411 142.556 L 367.416 186.517 383.730 186.517 L 400.044 186.517 399.974 134.552 C 399.935 105.971,399.686 81.891,399.419 81.041 C 399.066 79.912,399.004 80.330,399.192 82.584 C 399.409 85.186,399.273 84.875,398.331 80.618 C 397.716 77.837,396.586 73.549,395.822 71.090 C 395.057 68.630,394.530 66.518,394.652 66.397 C 394.844 66.205,395.526 68.301,398.277 77.528 L 398.863 79.494 398.581 77.479 C 398.012 73.426,394.950 64.778,393.548 63.265 C 392.771 62.426,392.144 61.437,392.155 61.067 C 392.166 60.696,392.536 61.025,392.978 61.798 C 394.777 64.946,393.626 61.709,391.015 56.280 C 389.482 53.090,387.986 50.629,387.691 50.811 C 387.397 50.993,386.973 50.846,386.750 50.484 C 386.496 50.073,386.587 49.977,386.992 50.227 C 387.798 50.725,387.817 50.257,387.050 48.824 C 386.726 48.217,386.238 47.859,385.966 48.027 C 385.694 48.195,385.288 48.037,385.064 47.675 C 384.796 47.241,384.903 47.169,385.379 47.463 C 385.860 47.761,386.014 47.649,385.841 47.129 C 385.698 46.700,385.307 46.348,384.972 46.348 C 384.637 46.348,384.153 46.118,383.895 45.837 C 383.619 45.535,383.744 45.509,384.202 45.775 C 384.732 46.082,384.895 45.977,384.717 45.443 C 384.574 45.014,384.183 44.663,383.848 44.663 C 383.514 44.663,383.029 44.433,382.772 44.152 C 382.495 43.850,382.621 43.824,383.079 44.089 C 383.609 44.396,383.771 44.292,383.593 43.758 C 383.450 43.329,383.059 42.978,382.725 42.978 C 382.390 42.978,381.905 42.747,381.648 42.466 C 381.372 42.164,381.497 42.139,381.955 42.404 C 382.485 42.711,382.648 42.606,382.470 42.073 C 382.327 41.643,381.927 41.292,381.582 41.292 C 381.237 41.292,380.626 40.925,380.225 40.477 C 379.594 39.772,379.629 39.763,380.478 40.405 C 381.894 41.477,381.691 40.264,380.241 38.992 C 379.478 38.323,379.202 38.237,379.506 38.764 C 379.924 39.491,379.860 39.501,379.040 38.836 C 378.011 38.001,377.737 37.356,378.652 37.921 C 379.931 38.712,379.083 37.170,377.396 35.639 C 375.874 34.257,375.760 34.217,376.690 35.393 L 377.801 36.798 376.260 35.436 C 374.722 34.076,374.218 33.332,375.281 33.989 C 378.651 36.072,368.261 25.490,362.360 20.830 C 356.045 15.844,341.960 7.281,340.122 7.312 C 339.839 7.317,342.249 8.728,345.479 10.449 C 351.460 13.635,360.568 19.586,361.876 21.162 C 362.274 21.641,360.590 20.591,358.134 18.830 C 346.397 10.408,333.787 4.843,319.108 1.605 C 314.931 0.683,314.717 0.582,317.416 0.807 C 319.500 0.981,320.033 0.916,319.052 0.606 C 314.765 -0.750,280.249 0.098,273.876 1.715 M277.528 1.964 C 264.047 4.949,250.478 10.997,239.888 18.742 C 238.188 19.985,237.126 20.597,237.528 20.101 C 238.454 18.958,246.317 13.762,251.231 11.048 C 259.325 6.576,276.799 0.620,281.742 0.649 C 282.669 0.654,280.772 1.246,277.528 1.964 M326.966 3.069 C 330.520 4.110,334.664 5.495,336.175 6.146 C 337.686 6.798,339.025 7.230,339.149 7.106 C 339.750 6.504,323.570 1.083,321.373 1.150 C 320.896 1.165,323.413 2.028,326.966 3.069 M364.923 23.736 L 366.573 25.562 364.747 23.912 C 363.743 23.004,362.921 22.183,362.921 22.086 C 362.921 21.652,363.385 22.034,364.923 23.736 M233.708 23.195 C 233.708 23.284,232.381 24.611,230.758 26.145 L 227.809 28.933 230.597 25.983 C 233.187 23.242,233.708 22.776,233.708 23.195 M370.787 28.933 C 372.777 30.941,374.279 32.584,374.125 32.584 C 373.970 32.584,372.215 30.941,370.225 28.933 C 368.234 26.924,366.732 25.281,366.886 25.281 C 367.041 25.281,368.796 26.924,370.787 28.933 M224.157 32.865 C 222.793 34.256,221.550 35.393,221.395 35.393 C 221.241 35.393,222.231 34.256,223.596 32.865 C 224.960 31.475,226.203 30.337,226.358 30.337 C 226.512 30.337,225.522 31.475,224.157 32.865 M301.404 33.760 C 309.603 34.425,318.724 36.405,324.214 38.712 C 326.460 39.656,328.391 40.335,328.504 40.222 C 330.046 38.681,310.525 33.817,301.404 33.470 L 294.663 33.214 301.404 33.760 M290.598 34.111 C 291.452 34.240,292.716 34.237,293.407 34.103 C 294.098 33.970,293.399 33.864,291.854 33.869 C 290.309 33.873,289.744 33.982,290.598 34.111 M258.427 46.503 C 257.346 47.331,254.059 50.285,251.124 53.067 C 246.202 57.731,246.093 57.803,249.719 53.999 C 253.321 50.221,259.436 44.908,260.112 44.971 C 260.267 44.985,259.508 45.674,258.427 46.503 M347.472 52.809 C 348.994 54.354,350.112 55.618,349.958 55.618 C 349.803 55.618,348.432 54.354,346.910 52.809 C 345.388 51.264,344.270 50.000,344.424 50.000 C 344.579 50.000,345.950 51.264,347.472 52.809 M201.364 73.836 C 201.158 74.660,200.880 75.225,200.748 75.092 C 200.615 74.960,200.676 74.178,200.883 73.355 C 201.089 72.531,201.367 71.966,201.499 72.099 C 201.632 72.231,201.571 73.013,201.364 73.836 M199.777 80.090 C 199.333 81.925,198.949 83.004,198.923 82.487 C 198.858 81.182,200.188 75.564,200.407 76.220 C 200.504 76.513,200.221 78.254,199.777 80.090 M198.589 85.815 C 198.364 86.973,198.013 109.789,197.811 136.517 L 197.443 185.112 197.317 139.364 C 197.201 97.117,197.541 83.708,198.730 83.708 C 198.878 83.708,198.815 84.656,198.589 85.815 M231.320 161.896 C 231.236 174.665,231.167 164.382,231.167 139.045 C 231.167 113.708,231.236 103.261,231.320 115.829 C 231.404 128.397,231.404 149.127,231.320 161.896 M259.826 295.225 C 259.826 355.478,259.892 380.043,259.972 349.815 C 260.052 319.587,260.052 270.289,259.972 240.264 C 259.892 210.240,259.826 234.972,259.826 295.225 M375.421 187.499 C 379.979 187.593,387.437 187.593,391.994 187.499 C 396.552 187.404,392.823 187.327,383.708 187.327 C 374.593 187.327,370.864 187.404,375.421 187.499 " stroke="none" fill="green" fill-rule="evenodd"></path></g></svg>`

fetch("https://crioschan.github.io/projects.json").then(res => res.json()).then(out => {
    var projects_element = document.getElementById("projets")
    for(const obj in out.projects) {
        var statut = ""
        var repo = ""
        var thumbnail = `<img src="${out.projects[obj].thumbnail}">`
        var repo_url = ` `
        switch(out.projects[obj].statut){
            case "in_dev":
                statut = in_dev
                break
            case "finish":
                statut = finish
                break
            case "pause":
                statut = pause
                break
            case "discontinued":
                statut = sans_suite
                break
            default:
                break
        }

        switch(out.projects[obj].repo){
            case "private":
                repo = privee
                break
            case "public":
                repo = public
                repo_url = ` <a href="${out.projects[obj].repo_link}">Voir la repository...</a>`
                break
            case "inexistante":
                repo = sans_suite
                break
            default:
                break
        }

        switch(out.projects[obj].type){
            case "video":
                thumbnail = `<video controls src="${out.projects[obj].thumbnail}"></video>`
                break
            default:
                break
        }

        var html = `
        <div id="${obj}">
            ${thumbnail}
            <div id="texts">
                <h1 id="title">${out.projects[obj].title}</h1>
                <div id="informations">
                    <div id="lang">
                        <h1>Langages</h1>
                        <span id="lang_bar">

                        </span>
                        <div id="legend">
                            
                        </div>
                    </div>
                    <h1 id="statut">Statut : ${statut}</h1>
                    <h1 id="repository">Repository : ${repo}</h1>
                </div> 
                <p>&emsp;&emsp;${out.projects[obj].desc}${repo_url}</p>
            </div>
        </div>
        `
        projects_element.insertAdjacentHTML('beforeend', html)
        let new_element = projects_element.querySelector(`#${obj}`)


        for(const lang in out.projects[obj].languages){
            const progress = `<span class="progress-item" id="${lang}" style="background-color: ${out.languages[lang].color};width: ${out.projects[obj].languages[lang]}%;"></span>`
            const lang_name = `<div><svg style="color: ${out.languages[lang].color};" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon   octicon-dot-fill mr-2">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
            <span>${out.languages[lang].name} </span></div>`

            new_element.querySelector(`#lang_bar`).insertAdjacentHTML("beforeend", progress)
            new_element.querySelector(`#legend`).insertAdjacentHTML("beforeend", lang_name)
        }
    }
})
