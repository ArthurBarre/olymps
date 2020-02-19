<?php

namespace App\Controller;

use App\Repository\LocationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class InfraController extends AbstractController
{
    /**
     * @Route("/locations", name="infra")
     * @param InfrastructureRepository $infraRep
     * @return JsonResponse
     */
    public function index(LocationRepository $infraRep)
    {
        $result = $infraRep->findAll();
        return $this->json($result);
    }
}
