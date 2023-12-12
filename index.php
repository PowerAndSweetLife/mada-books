<?php
session_start();
include "config.php";

if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case "commentaire":
            include FRONTEND . "etablissement.php";
            break;
        case "insert_comments":
            include BACKEND . "insert_comments.php";
            break;
    }
} else {
    include FRONTEND . "index.php";
}
