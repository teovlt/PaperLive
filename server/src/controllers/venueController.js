const Venue = require('../models/venueModel');
const ObjectId = require('mongoose').Types.ObjectId;

// module.exports.createOrUpdateVenue = async (venue) => {
//   const { _id, ...venueData } = venue;
//   if (_id) {
//     const updatedVenue = await Venue.findOne({ _id: _id });
//     await updatedVenue.updateOne({ $set: { ...venueData } });
//     return updatedVenue;
//   } else {
//     return await Venue.create({ ...venueData });
//   }
// };

module.exports.getVenues = async (req, res) => {
  const venues = await Venue.find();
  return res.status(200).json(venues);
};

module.exports.createVenue = async (req, res) => {
  const venue = new Venue({
    ...req.body,
  });
  await venue.save();
  return res.status(200).json(venue);
};

module.exports.updateVenue = async (req, res) => {
  const { venueId } = req.params;
  if (!ObjectId.isValid(venueId)) return res.status(500).json({ error: `Invalid ID: ${venueId}` });

  const venue = await Venue.findOneAndUpdate(
    { _id: venueId },
    { $set: { ...req.body } },
    { new: true }
  );

  if (!venue) return res.status(404).json({ error: 'Venue not found' });
  return res.status(200).json(venue);
};
