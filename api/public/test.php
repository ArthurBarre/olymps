<?php


$typeData = file_get_contents('http://localhost:8000/data-properties.json');
$infra = file_get_contents('http://localhost:8000/data.json');
$types = file_get_contents('http://localhost:8000/data-types.json');
$joint = file_get_contents('http://localhost:8000/joint-data.json');
$districts = file_get_contents('http://localhost:8000/district.json');

$districtsJson = json_decode($districts, true);
$typeDataJson = json_decode($typeData, true);
$json = json_decode($infra, true);
$json2 = json_decode($types, true);
$joint2 = json_decode($joint, true);
for ($i = 0; $i < count($json); $i++) {
    $paris_start = 75;
    $district = $districtsJson[$i];
    $testDistrict = substr($district, 2, 1);
//    var_dump($testDistrict);
    $paris_end = substr($district, 3, 2);
    var_dump($paris_end,$district);

    if (is_null($district)) {
//        var_dump(75019);
    } else if ($testDistrict === 1) {
        $goodDistrict = $paris_start . 0 . $paris_end;
//        dd($goodDistrict);
        var_dump($goodDistrict);
    } else {
//        var_dump($districtsJson[$i]);
    }
}
//for ($i = 0; $i < count($json); $i++) {
//    $district = $json[$i];
////    $newDistrict = substr($district, 2, 3);
//    var_dump($district);
////            if($json2[$i]['insarrondissement'] ) {
////
////            }
//}