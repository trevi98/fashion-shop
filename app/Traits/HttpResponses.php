<?php

namespace App\Traits;

use PhpParser\Builder\Trait_;

trait HttpResponses {

    protected function success($data, $message=null, $code=200){
        return response()->json([
            'status' => 'Reauest was successful',
            'data' => $data,
            'message' => $message,
        ],$code);
    }

    protected function error($data, $message=null, $code){
        return response()->json([
            'status' => 'An error occurred',
            'data' => $data,
            'message' => $message,
        ],$code);
    }
}

?>
