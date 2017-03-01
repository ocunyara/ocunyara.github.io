<?php

if( ! empty($_POST) ) {


    $data = (object) $_POST;

    // var_dump($data);
    //die;


    //if( ! $data->name) return 'Поле "Имя" не заполнено.';
    if( ! $data->phone) return 'Поле "телефон" не заполнено.';

    $to = 'antonlezer@gmail.com';
    $subject = 'Обратный звонок';

    $message = 'Имя ' . $data->name . '. Телефон ' . $data->phone;



    if (isset($data->address)) {
        $message .=  "\r\nАдресс:" . $data->address;
    }
    if (isset($data->mail)) {
        $message .=  "\r\n mail:" . $data->mail;
    }
    if (isset($data->text)) {
        $message .=  "\r\ntext:" . $data->text;
    }



    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <from@example.com>\r\n";


    var_dump(mail($to, $subject, $message, $headers));

    return 'Скрипт завершил свою работу.';

} else {
    return 'Форма пустая.';
}