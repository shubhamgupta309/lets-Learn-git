<?php
$data = array(
            array("id" => 1,
                "name" => "ram",
                "age" => "22"
            ),
            array("id" => 2,
                "name" => "Sunil",
                "age" => "23"
            ),
            array("id" => 3,
                "name" => "ramesh",
                "age" => "22"
            ),
            array("id" => 4,
                "name" => "Sunil Sen",
                "age" => "23"
            ),
            array("id" => 5,
                "name" => "ram kumar",
                "age" => "22"
            ),
            array("id" => 6,
                "name" => "Sunil Prasad",
                "age" => "23"
            ),
        );

// echo "<pre>";
// print_r($data);
echo json_encode($data);