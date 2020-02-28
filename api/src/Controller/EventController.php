<?php


namespace App\Controller;

use App\Entity\Events;
use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{

//    /**
//     * @Route("/event", name="district")
//     * @param LocationRepository $locRep
//     * @param Request $request
//     * @return JsonResponse
//     */
//    public function districtById(LocationRepository $locRep, Request $request)
//    {
//        // GET http://localhost:8000/district?district=75019
//        $district = $request->query->get('district');
//        $locations = $locRep;
//        $locFiltered = $locations->findByDistrict($district);
//
//        return $this->json($locFiltered);
//    }

    /**
     * @Route("/events", name="events")
     * @param EventRepository $evRep
     * @return JsonResponse
     */
    public function allEvents(EventRepository $evRep)
    {
        // GET http://localhost:8000/events
        $events = $evRep;
        $allEvents = $events->findAll();
//        dd($allEvents);
        return $this->json($allEvents);
    }

}
