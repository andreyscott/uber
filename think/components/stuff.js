{  origin?.location && (
    <Marker
    coordinate={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
    }}
    title="Origin"
    description={origin.description}
    identifier="origin"
    />
)}